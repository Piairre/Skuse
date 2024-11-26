import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    ExternalLink,
    BookOpenText,
    Scale,
    Contact2,
    Server
} from 'lucide-react';
import {OpenAPIV3} from "openapi-types";

// Using the OpenAPI types you provided directly
interface OpenAPIHeaderProps {
    document: OpenAPIV3.Document;
}

const Header: React.FC<OpenAPIHeaderProps> = ({ document }) => {
    // Provide default values and handle potential undefined cases
    const info = document?.info ?? {
        title: 'API Documentation',
        version: '1.0.0',
        description: '',
        contact: undefined,
        license: undefined,
        termsOfService: undefined
    };

    const servers = document?.servers ?? [];
    const externalDocs = document?.externalDocs;

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl font-bold">
                        {info.title}
                    </CardTitle>
                    <Badge variant="secondary" className="px-3 py-1">
                        {info.version}
                    </Badge>
                </div>
                {info.description && (
                    <CardDescription className="mt-2 text-muted-foreground">
                        {info.description}
                    </CardDescription>
                )}
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    {info.contact && (
                        <div className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg">
                            <Contact2 className="w-5 h-5 text-primary" />
                            <div>
                                <h3 className="font-semibold">Contact</h3>
                                {info.contact.name && <p>{info.contact.name}</p>}
                                {info.contact.email && (
                                    <a
                                        href={`mailto:${info.contact.email}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {info.contact.email}
                                    </a>
                                )}
                                {info.contact.url && (
                                    <a
                                        href={info.contact.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-blue-600 hover:underline"
                                    >
                                        Website <ExternalLink className="ml-1 w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    )}

                    {info.license && (
                        <div className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg">
                            <Scale className="w-5 h-5 text-primary" />
                            <div>
                                <h3 className="font-semibold">License</h3>
                                <p>{info.license.name}</p>
                                {info.license.url && (
                                    <a
                                        href={info.license.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-blue-600 hover:underline"
                                    >
                                        View License <ExternalLink className="ml-1 w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {info.termsOfService && (
                    <div className="mt-4 flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg">
                        <BookOpenText className="w-5 h-5 text-primary" />
                        <div>
                            <h3 className="font-semibold">Terms of Service</h3>
                            <a
                                href={info.termsOfService}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline flex items-center"
                            >
                                View Terms <ExternalLink className="ml-1 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                )}

                {/* Servers */}
                {servers && servers.length > 0 && (
                    <div className="mt-4">
                        <div className="flex items-center mb-2">
                            <Server className="w-5 h-5 mr-2 text-primary" />
                            <h3 className="font-semibold">Available Servers</h3>
                        </div>
                        <div className="space-y-2">
                            {servers.map((server, index) => (
                                <div
                                    key={index}
                                    className="bg-secondary/10 p-2 rounded-lg flex justify-between items-center"
                                >
                                    <div>
                                        <p className="font-medium">{server.url}</p>
                                        {server.description && (
                                            <p className="text-sm text-muted-foreground">
                                                {server.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {externalDocs && (
                    <div className="mt-4 flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg">
                        <BookOpenText className="w-5 h-5 text-primary" />
                        <div>
                            <h3 className="font-semibold">External Documentation</h3>
                            <a
                                href={externalDocs.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline flex items-center"
                            >
                                {externalDocs.description || 'View Documentation'}
                                <ExternalLink className="ml-1 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default Header;