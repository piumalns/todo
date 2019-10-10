import axios from "axios";


export async function getTodo() {
    
        let res = await axios.get("http://localhost:1064/api/Values");
        console.log(res.data);
        let  data  = res.data;
        return data;
  
}

export async function deleteUserTodo(userId){
    
        let res = await axios.delete('http://localhost:1064/api/Values/'+userId)
        console.log(res.status);
      
}