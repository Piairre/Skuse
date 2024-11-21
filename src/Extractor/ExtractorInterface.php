<?php

namespace Piairre\Skuse\Extractor;

use Piairre\Skuse\Model\Endpoint;
interface ExtractorInterface
{
    /**
     * @return array<Endpoint>
     */
    public function extract(): array;
}