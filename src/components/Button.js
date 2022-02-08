function Button({children, variant}) {

    const variants = {
        "outline-yellow": 'text-yellow-300 border border-yellow-300 rounded-full',
        "fill-yellow": 'bg-yellow-300 rounded-full mt-10'
    }

    const pickedVariant = variants[variant];

    return (
            <a className={`border font-semibold px-10 py-2 text-lg inline-block ${pickedVariant}`}>
                {children}</a>
    );
}

export default Button;