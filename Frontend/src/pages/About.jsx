import Parent from '../components/Parent'

const About = () => {
    const element = <div>Hello world</div>; 
    
    return (
        <div>
            {element}
            <Parent/>
        </div>
    )
}

export default About