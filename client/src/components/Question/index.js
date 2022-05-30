/* js file for rendering a single question to screen 
 * programmatically displays answer boxes
*/

const Question = (props) => {
    const { currentQuestion, setCurrentQuestion, handleSubmit } = props;

    const questionStyle = {
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'white',
        marginBottom: '400px',
    }
    const questionTextStyle = {
        fontSize: '30pt',

    }
    return (
        <div style={questionStyle}>
            <div style={questionTextStyle}>
                {currentQuestion.question}
            </div>
            {currentQuestion.response.map((i, index) => {
                return (
                    <button type="submit" key={index} onClick={() => {
                        handleSubmit(currentQuestion.response[index])
                    }} style={questionTextStyle}>
                        {currentQuestion.response[index].text}
                    </button>
                )
            })}
        </div>
    )
}

export default Question
