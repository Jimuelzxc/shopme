const Container = ({ children,className }) => {
    return (
        <div className={`mx-3 md:mx-10 ${className}`}>
            {children}
        </div>
    );
}

export default Container;