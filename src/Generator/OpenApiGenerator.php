<?php

namespace Piairre\Skuse\Generator;

use Exception;
use OpenApi\Annotations\OpenApi;
use OpenApi\Serializer;
use Symfony\Component\HttpFoundation\RequestStack;

class OpenApiGenerator
{
    public function __construct(
        private RequestStack $requestStack,
        private string $docsJsonPath = 'docs.jsonopenapi'
    ) {
    }

    /**
     * @throws Exception
     */
    public function generate(): OpenAPI
    {
        $basePath = $this->requestStack->getCurrentRequest()->getSchemeAndHttpHost();
        $jsonOpenApiPath = $basePath . '/' . $this->docsJsonPath;

        try {
            $jsonOpenApi = file_get_contents($jsonOpenApiPath);
        } catch (Exception) {
            throw new Exception('Invalid path. URL : ' . $jsonOpenApiPath);
        }

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception('Error while reading documentation : ' . json_last_error_msg());
        }

        $serializer = new Serializer();

        try {
            $spec = $serializer->deserialize($jsonOpenApi, OpenAPI::class);
        } catch (Exception $e) {
            throw new Exception('Error while reading OpenAPI specification : ' . $e->getMessage());
        }

        return $spec;
    }
}