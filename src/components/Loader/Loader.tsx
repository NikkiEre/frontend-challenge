import './Loader.css';

export function Loader(): JSX.Element {
    return (
        <div className='loader'>
            <p className='loader__text'>... загружаем еще котиков ...</p>
        </div>
    );
}