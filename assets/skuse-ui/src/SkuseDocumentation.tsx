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
import Header from "@/components/openapi/Header";
import Sidebar from "@/components/openapi/Sidebar";

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
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                <div className="w-1/4 p-2">
                    <Sidebar document={spec} />
                </div>
                <div className="w-3/4 p-4">
                    <Header document={spec} />
                </div>
            </div>
        </div>
    );
};