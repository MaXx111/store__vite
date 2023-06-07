function IconSwitch({icon, onSwitch}) {

    return (
        <>
        <button onClick={onSwitch} className="material-icons icon">{icon}</button>
        </>
    )
}

export default IconSwitch