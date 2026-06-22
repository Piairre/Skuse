<?php

namespace Piairre\Skuse\Controller;

use Piairre\Skuse\PiairreSkuseBundle;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class DocumentationController extends AbstractController
{
    public function __construct(
        private string $openApiUrl,
        private string $theme,
    ) {
    }

    public function __invoke(): Response
    {
        return $this->render('@PiairreSkuse/documentation.html.twig', [
            'open_api_url' => $this->openApiUrl,
            'theme' => $this->theme,
            'skuse_ui_version' => PiairreSkuseBundle::SKUSE_UI_VERSION,
        ]);
    }
}
