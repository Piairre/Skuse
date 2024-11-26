import { useState, useEffect } from 'react';
import { ApiSpec } from '@/types/openapi';

interface UseApiSpecReturn {
    spec: ApiSpec | null;
    error: Error | null;
    isLoading: boolean;
    refetch: () => void;
}

export function useApiSpec(): UseApiSpecReturn {
    const [spec, setSpec] = useState<ApiSpec | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchSpec = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch('/bundles/skuse/openapispec');

            if (!response.ok) {
                throw new Error('Failed to load API spec');
            }

            const data = await response.json();
            setSpec(data);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to load API spec'));
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSpec();
    }, []);

    return { spec, error, isLoading, refetch: fetchSpec };
}