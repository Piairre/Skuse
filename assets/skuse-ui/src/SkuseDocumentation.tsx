import React from 'react';
import {useApiSpec} from './hooks/useApiSpec';
import Header from "@/components/openapi/Header";
import Sidebar from "@/components/openapi/Sidebar";
import Auth from "@/components/openapi/Auth/AuthButton";
import Servers from "@/components/openapi/Servers";

export const SkuseDocumentation: React.FC = () => {
    const {spec, error, isLoading} = useApiSpec();

    if (isLoading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.message}</div>;
    if (!spec) return null;

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <div className="w-70 bg-white border-r">
                <Sidebar document={spec}/>
            </div>
            <div className="flex-1 m-2">
                <Header document={spec}/>
                <div className="grid lg:grid-cols-2 gap-2 mt-2">
                    <Servers servers={spec.servers}/>
                    <Auth securitySchemes={spec.components.securitySchemes}/>
                </div>
            </div>
        </div>
    );
}