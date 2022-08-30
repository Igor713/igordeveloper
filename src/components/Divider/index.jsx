import './styles.sass';

const Divider = ({ backgroundColor }) => {
    return (
        <div className="divider" style={{ backgroundColor: `${backgroundColor}` }}></div>
    );
};

export default Divider;