function Hello() {

  let myName = 'Samim';
  let number = 456;
  let fullName = () => {
    return 'Samim Akter';
  }

  return  <h3>
    MessageNo: {number} I am your master {fullName()}
  </h3>
}

export default Hello;