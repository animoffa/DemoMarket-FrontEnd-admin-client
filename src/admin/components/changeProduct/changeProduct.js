import React, {Component} from "react";
import Css from "./changeProduct.module.css";

export default (props) => {
    let {product, categories, name, description, price, color, wireless, backlight, producer, category, id} = props.state;
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
                        <ChangeForm product={product} UpdateProduct={props.UpdateProduct} categories={categories}
                                    description={description} price={price} color={color} wireless={wireless} id={id}
                                    backlight={backlight} producer={producer} category={category} name={name}/>
                    </form>
                </div>
            </div>
        </div>
    </div>)
};

class ChangeForm extends Component {
    constructor(props) {
        super(props);
        let {name, description, price, color, wireless,
            backlight, producer, category} = this.props
        this.state = {
            name, description, price, color,
            wireless, backlight, producer, category,
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
        let {name,description,price, color, wireless, backlight, producer, category }=this.state
        this.props.UpdateProduct(this.props.id, name,description,price, color, wireless, backlight,producer,category);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={Css.formFields}>
                <fieldset className={Css.fildset}>
                    <input name="name" onChange={(e) => this.Change(e.currentTarget)} autoFocus={true} id={"nme"}
                           defaultValue={this.props.name} className={Css.as} required/>
                    <label htmlFor="nme"><span>Name</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name="description" onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.description} id="d" className={Css.as} required/>
                    <label htmlFor="d"><span>Description</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name="price" onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.price} id="p" className={Css.as} required/>
                    <label htmlFor="p"><span>Price</span></label>
                </fieldset>
                <fieldset className={Css.fildset}>
                    <input name="color" onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.color} id="c" className={Css.as} required/>
                    <label htmlFor="c"><span>Color</span></label>
                </fieldset>

                <input type="checkbox" name="wireless" onChange={(e) => this.Change(e.currentTarget)}
                       checked={this.props.wireless} className={Css.CheckBoxes}/>

                <input type="checkbox" name="backlight" onChange={(e) => this.Change(e.currentTarget)}
                       checked={this.props.backlight} className={Css.CheckBoxes}/>

                <fieldset className={Css.fildset}>
                    <input name="producer" onChange={(e) => this.Change(e.currentTarget)}
                           defaultValue={this.props.producer} id="prod" className={Css.as} required/>
                    <label htmlFor="prod"><span>Producer</span></label>
                </fieldset>

                <fieldset className={Css.fildset}>
                    <select className={Css.selectField} name="category" value={this.props.category}
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