<?php

namespace Piairre\Skuse\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('piairre_skuse');

        $treeBuilder->getRootNode()
            ->children()
                ->scalarNode('open_api_url')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
                ->enumNode('theme')
                    ->values(['light', 'dark', 'system'])
                    ->defaultValue('system')
                ->end()
            ->end()
        ;

        return $treeBuilder;
    }
}
