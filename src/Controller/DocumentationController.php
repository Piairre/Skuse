<?php
namespace Piairre\Skuse\Controller;

use Piairre\Skuse\Generator\OpenApiGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class DocumentationController extends AbstractController
{
    private OpenApiGenerator $generator;

    public function __construct(OpenApiGenerator $generator)
    {
        $this->generator = $generator;
    }

    public function __invoke(): Response
    {
        $spec = $this->generator->generate();

        return $this->render('@PiairreSkuse/documentation.html.twig', [
            'openapi_spec' => json_encode($spec)
        ]);
    }
}