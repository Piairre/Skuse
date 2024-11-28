import React from 'react';
import {Button} from "@/components/ui/button";
import {
    Key,
    Lock,
    KeyRound,
    UserCheck
} from 'lucide-react';
import {OpenAPIV3} from 'openapi-types';

interface AuthMethodProps {
    name: string;
    scheme: OpenAPIV3.SecuritySchemeObject;
}

export const BasicAuthMethod: React.FC<AuthMethodProps> = () => (
    <div className="space-y-4">
        <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter username"
            />
        </div>
        <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
                type="password"
                className="w-full p-2 border rounded"
                placeholder="Enter password"
            />
        </div>
        <Button className="w-full">Authenticate</Button>
    </div>
);

export const BearerTokenMethod: React.FC<AuthMethodProps> = () => (
    <div className="space-y-4">
        <div>
            <label className="block text-sm font-medium mb-2">Bearer Token</label>
            <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter token"
            />
        </div>
        <Button className="w-full">Add Token</Button>
    </div>
);

export const ApiKeyMethod: React.FC<AuthMethodProps> = ({scheme}) => (
    <div className="space-y-4">
        <div>
            <label className="block text-sm font-medium mb-2">
                {scheme.description || 'API Key'}
            </label>
            <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder={`Enter ${scheme.description || 'API Key'}`}
            />
        </div>
        <Button className="w-full">Save API Key</Button>
    </div>
);

export const OAuth2Method: React.FC<AuthMethodProps> = ({scheme}) => (
    <div className="space-y-4">
        {scheme.description}
        <Button className="w-full">
            Authorize with OAuth2
        </Button>
    </div>
);

export const getAuthMethodComponent = (scheme: OpenAPIV3.SecuritySchemeObject) => {
    switch (scheme.type) {
        case 'http':
            if (scheme.scheme === 'basic') return BasicAuthMethod;
            if (scheme.scheme === 'bearer') return BearerTokenMethod;
            break;
        case 'apiKey':
            return ApiKeyMethod;
        case 'oauth2':
            return OAuth2Method;
        default:
            return () => <div>Unsupported authentication method</div>;
    }
};

export const getSchemeIcon = (type: string) => {
    switch (type) {
        case 'http':
            return <UserCheck className="w-5 h-5 mr-2"/>;
        case 'apiKey':
            return <Key className="w-5 h-5 mr-2"/>;
        case 'oauth2':
            return <Lock className="w-5 h-5 mr-2"/>;
        default:
            return <KeyRound className="w-5 h-5 mr-2"/>;
    }
};