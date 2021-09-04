import TextInput from "../Inputs/TextInput";
import Textarea from "../Inputs/Textarea";
import SelectGroup from "../Inputs/SelectGroup";

const AboutForm = ({about, handleInput, rYield}) => {
    let difficultyOptions = [["vEasy", "Very Easy"], ["easy", "Easy"], ["medium", "Moderate"], ["hard", "Hard"], ["vHard", "Very Hard"]];
    let cookTimeOptions = 200;

    // about state, handle input, recipeyield, 
        return <form>
                    <div className="form__about">
                        <div className="col-12">
                            <h1 className="form__header form__header--secondary">General Info</h1>
                        </div>
                        <div className="col-8">
                            <TextInput label="title" inputValue={about.title} section="about" handleInput={handleInput} size="8"/>
                        </div>
                        <div className="col-12 flex flex__wrap flex__justify--center flex__gap--2">
                            <SelectGroup rounded="true" handleChange={handleInput} section="about" options={difficultyOptions} label="difficulty" placeholder="How difficult?"/>
                            <SelectGroup rounded="true" handleChange={handleInput} section="about" options={cookTimeOptions} label="cookTime" placeholder="Cooking time(minutes)"/>
                            <TextInput label="yield" inputValue={rYield} handleInput={handleInput} section="recipe" size="2"/>
                        </div>
                        <div className="form__about--description col-12">
                            <Textarea label="description" section="about" inputValue={about.description} handleInput={handleInput} size="12" instruction="Enter a description." height="8"/>
                        </div>
                        <div className="form__about--photo col-12">
                                
                        </div>
                    </div>
                </form>
}

export default AboutForm;