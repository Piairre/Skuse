<?php

namespace Piairre\Skuse;

use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;
use Symfony\Component\HttpKernel\Bundle\Bundle;
use Piairre\Skuse\DependencyInjection\PiairreSkuseExtension;

class PiairreSkuseBundle extends Bundle
{
    public function getPath(): string
    {
        return dirname(__DIR__);
    }

    public function getContainerExtension(): ?ExtensionInterface
    {
        return new PiairreSkuseExtension();
    }
}