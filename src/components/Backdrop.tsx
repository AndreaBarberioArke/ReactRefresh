export interface Props {
    onDelete:any | undefined | void; 
}

export  const Backdrop: React.FC<Props> = (props:Props) => {
    return (
        <div className="backdrop" onClick={props.onDelete}></div>
    )

}
export default Backdrop; 