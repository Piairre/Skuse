import ReactMarkdown from 'react-markdown';

function FormattedMarkdown({markdown}) {
    return (
        <ReactMarkdown
            components={{
                a: ({node, ...props}) => {
                    return (
                        <a href={props.href} target="_blank" rel="noopener noreferrer"
                           className="text-blue-600 hover:underline font-medium">
                            {props.children}
                        </a>
                    );
                }
            }}
            className="text-base leading-relaxed"
        >
            {markdown}
        </ReactMarkdown>
    );
}

export default FormattedMarkdown;