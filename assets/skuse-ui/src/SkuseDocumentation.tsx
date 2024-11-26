import React from 'react';
import { useApiSpec } from './hooks/useApiSpec';
import { OpenAPIV3 } from "openapi-types";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SkuseDocumentation: React.FC = () => {
    const { spec, error, isLoading } = useApiSpec();

    if (isLoading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.message}</div>;
    if (!spec) return null;

    const getMethodColor = (method: string) => {
        switch(method.toLowerCase()) {
            case 'get': return 'bg-green-100 text-green-800';
            case 'post': return 'bg-blue-100 text-blue-800';
            case 'put': return 'bg-yellow-100 text-yellow-800';
            case 'delete': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-3xl">{spec.info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{spec.info.description}</p>
                    <div className="mt-4 flex items-center space-x-4">
                        <Badge variant="secondary">Version: {spec.info.version}</Badge>
                    </div>
                </CardContent>
            </Card>

            <Tabs defaultValue="paths">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="paths">Endpoints</TabsTrigger>
                    <TabsTrigger value="schemas">Schemas</TabsTrigger>
                </TabsList>
                <TabsContent value="paths">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(spec.paths).map(([path, pathItem]) => (
                            <Card key={path}>
                                <CardHeader>
                                    <CardTitle className="text-lg truncate">{path}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {Object.entries(pathItem as OpenAPIV3.PathItemObject)
                                            .filter(([method]) => method !== '$ref')
                                            .map(([method, operation]) => {
                                                const op = operation as OpenAPIV3.OperationObject;
                                                return (
                                                    <div
                                                        key={method}
                                                        className="flex items-center space-x-2"
                                                    >
                                                        <Badge
                                                            className={`uppercase ${getMethodColor(method)}`}
                                                        >
                                                            {method}
                                                        </Badge>
                                                        <span className="text-sm text-muted-foreground truncate">
                                                            {op.summary || op.description || 'Aucune description'}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="schemas">
                    {/* TODO: Implémenter la vue des schemas */}
                    <div className="text-center text-muted-foreground">
                        Schemas non encore implémentés
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};