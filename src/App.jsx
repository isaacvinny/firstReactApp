import Header from "./Components/Header"
import MainBody from "./Components/MainBody"
import staffData from "./staffData"


function App(){
  
  const cardData = staffData.map((data) => {
    return(
      <MainBody 
        key={data.id}
/** You can make use of a shorter method by passing the entire object as seen below, go to the MainBody.jsx and include the name .entry before all the props. e.g {props.entry.name}
 * 
 * Another method is to write {...entry} and make use of the usual {props.name} withouth the .entry in the MainBody.jsx
        image={data.image}
        name={data.name}
        position={data.position}
        edu={data.education}
        phone={data.phone}
        email={data.email}
 */
        entry={data}
      />
    )
  })

  return(
    <>
      <Header />
      <div className="section-container">
        {cardData}
        {/* 
Its better and sustainnable to use the .map() and create a new javascript file(staffData.js) containing the below data.
          <MainBody 
          image={{
            src:"../public/images/mr-one.png",
            alt:"Mr one image"
          }}
          name ="Mr Numerical One"
          position="Cheif Operating Officer"
          education="PhD Data Management"
          phone="+234 803 567 3431"
          email="mronenumerical@gmail.com"
        />
        <MainBody 
          image={{
            src:"../public/images/mrs-one.png",
            alt:"Mr one image"
          }}
          name ="Mrs Numerical One"
          position="Cheif Financial Officer"
          education="PhD Accounting"
          phone="+234 703 234 6537"
          email="mrsonenumerical@gmail.com"
        />
        <MainBody 
          image={{
            src:"../public/images/mrs-three.png",
            alt:"Mr one image"
          }}
          name ="Mrs Numerical Three"
          position="Human Resource Manager"
          education="Msc Human Resources"
          phone="+234 803 875 1558"
          email="mrsthreenumerical@gmail.com"
        />
        <MainBody 
          image={{
            src:"../public/images/mrs-two.png",
            alt:"Mr one image"
          }}
          name ="Mrs Numerical Two"
          position="Marketing Manager"
          education="Msc Marketing"
          phone="+234 803 563 0987"
          email="mrstwonumerical@gmail.com"
        />
        <MainBody 
          image={{
            src:"../public/images/mr-three.png",
            alt:"Mr one image"
          }}
          name ="Mr Numerical Three"
          position="Information Technology Manager"
          education="PhD Artificial Intelligence"
          phone="+234 803 234 5434"
          email="mrthreenumerical@gmail.com"
        />
        <MainBody 
          image={{
            src:"../public/images/mr-two.png",
            alt:"Mr one image"
          }}
          name ="Mr Numerical Two"
          position="Cheif Production Manager"
          education="Msc International Relations"
          phone="+234 803 129 6532"
          email="mrtwonumerical@gmail.com"
        />
*/}
      </div>
    </>
  )
}

export default App