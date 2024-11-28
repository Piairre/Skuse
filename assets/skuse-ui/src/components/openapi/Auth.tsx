import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
    Lock,
    ShieldCheck
} from 'lucide-react';
import { OpenAPIV3 } from 'openapi-types';

interface AuthBlockProps {
    securitySchemes: {
        [key: string]: OpenAPIV3.ReferenceObject | OpenAPIV3.SecuritySchemeObject
    }
}

const AuthBlock: React.FC<AuthBlockProps> = ({ securitySchemes }) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                    <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
                    Authentication
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {Object.entries(securitySchemes).map(([name, scheme]) => {
                    let icon = <Lock className="mr-2 h-4 w-4" />;
                    let description = '';

                    /*switch (scheme.type) {
                        case 'oauth2':
                            icon = <KeyRound className="mr-2 h-4 w-4 text-green-500" />;
                            description = 'OAuth 2.0 Authorization';
                            break;
                        case 'apiKey':
                            icon = <Lock className="mr-2 h-4 w-4 text-blue-500" />;
                            description = `API Key in ${scheme.in}`;
                            break;
                        case 'http':
                            icon = <ShieldCheck className="mr-2 h-4 w-4 text-purple-500" />;
                            description = `HTTP ${scheme.scheme} Authentication`;
                            break;
                    }*/

                    return (
                        <div key={name} className="flex items-center p-2 border rounded-lg bg-secondary/40">
                            {icon}
                            <div>
                                <h4 className="font-semibold">{name}</h4>
                                <p className="text-sm text-muted-foreground">{description}</p>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
};

export default AuthBlock;