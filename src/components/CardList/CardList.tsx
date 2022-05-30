import { CatDataType } from '../../store/reducers/catsReducer/catsReducer';
import { Card } from '../Card/Card';
import './CardList.css';

type CardListProps = {
    catList: CatDataType[],
    favoriteCats: CatDataType[],
    addCatInFavorite: (cat: CatDataType) => void,
    removeCatInFavorite: (cat: CatDataType) => void,
}

export function CardList({
    catList,
    favoriteCats,
    addCatInFavorite,
    removeCatInFavorite
}: CardListProps): JSX.Element {
    return (
        <ul className='cardlist'>
            {
                catList.map((cat) => {
                    const index = favoriteCats.findIndex((favCat) => favCat.id === cat.id);
                    return (<Card 
                        cat={cat} 
                        isLiked={index >= 0} 
                        addCatInFavorite={addCatInFavorite} 
                        removeCatInFavorite={removeCatInFavorite} 
                        key={cat.id} 
                    />)
                })

            }
        </ul>
    )
}