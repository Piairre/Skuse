<?php

namespace Piairre\Skuse\Model;
class Endpoint
{
    public string $name;
    public string $path;
    public array $methods;
    public ?string $description = null;
    public array $parameters = [];

    /**
     * @param string[] $methods
     */
    public function __construct(
        string $name,
        string $path,
        array $methods,
        ?string $description = null,
        array $parameters = []
    ) {
        $this->parameters = $parameters;
        $this->description = $description;
        $this->methods = $methods;
        $this->path = $path;
        $this->name = $name;
    }
}