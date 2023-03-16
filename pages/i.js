export const UploadModal = ({ isHidden = false, onApply = () => { } }) => {
    if (isHidden) return null;
    const completedRecords = useSelector(selectCompletedRecords);

    return (

        <div>
            {completedRecords.map(({ title, id }) => <p key={id}>{title}</p>)}
            <button onClick={onApply}>Apply</button>
        </div>

    );

}