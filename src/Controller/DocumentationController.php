<?php
namespace Piairre\Skuse\Controller;

use Exception;
use Piairre\Skuse\Generator\OpenApiGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DocumentationController extends AbstractController
{
    private OpenApiGenerator $generator;

    public function __construct(OpenApiGenerator $generator)
    {
        $this->generator = $generator;
    }

    #[Route('/bundles/skuse/documentation', name: 'documentation')]
    public function documentation(): Response
    {
        return $this->render('@PiairreSkuse/documentation.html.twig');
    }

    /**
     * @throws Exception
     */
    #[Route('/bundles/skuse/openapispec', name: 'openApiSpec')]
    public function openApiSpec(): JsonResponse
    {
        $spec = $this->generator->generate();

        return new JsonResponse($spec);
    }
}