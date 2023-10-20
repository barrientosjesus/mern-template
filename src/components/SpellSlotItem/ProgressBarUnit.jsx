export default function ProgressBarUnit({ index, value, max }) {
    console.log(value)
    return (
        <div id={index} className={`bg-blue-${index + 3}00 flex justify-center`} role="progressbar" style={{ height: "100%", opacity: `${index + 1 > value? '0' : '100'}`,transition: 'all 1s ease-out' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    );
}