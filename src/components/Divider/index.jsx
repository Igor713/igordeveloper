import './styles.sass';

const Divider = ({ backgroundColor }) => {
    return (
        <div className="divider" style={`background-color:${backgroundColor}`}></div>
    );
}