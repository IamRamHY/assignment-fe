interface iProps {
    label: string;
    value: string 
}

function UserMeta(): JSX.Element {
    return (
        <div className="metaDetails">
            <span>Email: </span>
            <span>{'email'}</span>
        </div>
    )
}

export default UserMeta