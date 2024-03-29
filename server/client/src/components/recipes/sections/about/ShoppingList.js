import SvgIcon from '../../../icons/SvgIcon';

const ShoppingList = ({list}) => {
    console.log(list);
    const renderShoppingList = (list) => {
        let result = [];
        for(let category in list){
            result.push(returnSubList(list[category], category));
        }
        return result;
    }

    const returnSubList = (list, heading) => {
        let result = [];
        result.push(<li className="list__heading list__heading--primary" key={`${heading}`}><SvgIcon icon={`#icon-${heading}`}/>{heading}</li>);
        for(let i = 0; i < list.length; i++){
            result.push(<li className="list__item u-font-grey-2" key={`${heading}-${i}`}>{list[i]}</li>);
        }
        return <ul key={heading} className="list list__shopping col-4">{result}</ul>
    }

    const shopping = {
        dairy: ["milk", "cheese", "yogurt"],
        meat: ["beef tenderloin", "chicken breast", "Fish Filet"],
        vegetable: ["onion", "carrot", "celery", "yukon potato"],
        dry: ["salt", "pepper"],
    }

    return(
        <div className="section__about--shopping u-padding-bottom-medium flex flex__wrap flex__justify--space-around">
            <div className="flex__heading recipe__heading--shopping col-12">
                <h4 className="heading__tertiary">Heres what you'll need:</h4>
            </div>
            {renderShoppingList(shopping)}
        </div>
    )
}

export default ShoppingList;