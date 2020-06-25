import React, {Component} from 'react';
import Css from "./ChangeProduct.module.css";

let ChangeProduct = (props) => {

    return (<div className={Css.CategoriesMain}>
        <h1 className={Css.title}>Изменение товара</h1>

        <div>
            <div className={Css.Form}>
                <div className={Css.FormTitles}>
                    <div>Название</div>
                    <div>Описание</div>
                    <div>Цена</div>
                    <div>Цвет</div>
                    <div>Беспроводная</div>
                    <div>Подсветка</div>
                    <div>Производитель</div>
                    <div>Категория</div>
                </div>
                <div>
                    <form onSubmit={props.handleSubmit}>
                        <ChangeForm product={props.state.product} UpdateProduct={props.UpdateProduct}
                                    categories={props.state.categories} name={props.state.name} description={props.state.description}
                                    price={props.state.price} color={props.state.color} wireless={props.state.wireless} backlight={props.state.backlight}
                                    producer={props.state.producer} category={props.state.category} id={props.state.id}/>
                    </form>
                </div>
            </div>
        </div>
    </div>)
};

class ChangeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.description,
            price: this.props.price,
            color: this.props.color,
            wireless: this.props.wireless,
            backlight: this.props.backlight,
            producer: this.props.producer,
            category: this.props.category,
        }
    }

    Change(e) {
        let value = e.value;
        let prop = e.name;
        this.setState((state) => {
            return {
                ...state,
                [prop]: value
            }
        })
    }

    SaveChanges() {
        debugger
        this.props.UpdateProduct(this.props.id, this.state.name, this.state.description, this.state.price, this.state.color, this.state.wireless,
            this.state.backlight, this.state.producer, this.state.category);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={Css.formFields}>
                <fieldset className={Css.fildset}>
                    <input name={"name"} onChange={(e) => this.Change(e.currentTarget)} autoFocus={true} id={"nme"}
                           defaultValue={this.props.name}
                           className={Css.as} required/>
                    <label htmlFor="nme"><span>Name</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name={"description"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.description} id={"d"} className={Css.as}
                           required/>
                    <label htmlFor="d"><span>Description</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name={"price"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.price} id={"p"} className={Css.as} required/>
                    <label htmlFor="p"><span>Price</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name={"color"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.color} id={"c"} className={Css.as} required/>
                    <label htmlFor="c"><span>Color</span></label>
                </fieldset>

                <input type="checkbox" name={"wireless"} onChange={(e) => this.Change(e.currentTarget)}
                       checked={this.props.wireless}
                       className={Css.CheckBoxes}/>

                <input type="checkbox" name={"backlight"} onChange={(e) => this.Change(e.currentTarget)}
                       checked={this.props.backlight}
                       className={Css.CheckBoxes}/>

                <fieldset className={Css.fildset}>
                    <input name={"producer"} onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.producer} id={"prod"} className={Css.as}
                           required/>
                    <label htmlFor="prod"><span>Producer</span></label>
                </fieldset>

                <fieldset className={Css.fildset}>
                    <select className={Css.selectField} name={"category"} value={this.props.category}
                            onChange={(e) => this.Change(e.currentTarget)}>
                        <option>Выберите категорию</option>
                        {
                            this.props.categories.map(m =>
                                <option value={m._id} key={m._id}>{m.name}</option>
                            )}
                    </select>
                </fieldset>
                <button className={Css.SaveButton} onClick={() => this.SaveChanges()}>Save changes</button>
            </form>
        )
    }
}

export default ChangeProduct;