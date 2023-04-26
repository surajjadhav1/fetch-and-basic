import axios from "axios";

const URL = 'http://localhost:8080';
//see
export const Home = async (data) =>{
  try{
      return await axios.get(`$(URL)/`,data);
  }catch(error){
      console.log('Error while calling Home API',error);
  }
}

//add
export const addEmployee = async (data) =>{
    try{
        return await axios.post(`$(URL)/addEmp`,data);
    }catch(error){
        console.log('Error while calling Add Employee API',error);
    }
}
//updadte
export const editEmployee = async (data) =>{
  try{
      return await axios.put(`$(URL)/editEmp`,data);
  }catch(error){
      console.log('Error while calling edit Employee API',error);
  }
}
//add
export const Addfeedback = async (data) =>{
  try{
      return await axios.post(`$(URL)/addfeed`,data);
  }catch(error){
      console.log('Error while calling Add feedback API',error);
  }
}
//get
export const Feedback = async (data) =>{
  try{
      return await axios.get(`$(URL)/feed`,data);
  }catch(error){
      console.log('Error while calling feedback API',error);
  }
}