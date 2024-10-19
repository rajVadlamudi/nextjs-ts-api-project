
interface Params {
  params: {name: string}
}
//https://api.agify.io/?name=raj
//response: {"count":11014,"name":"raj","age":52}
const getPredictedAge = async(name:string)=>{
  const resp = await fetch(`https://api.agify.io/?name=${name}`);
  return resp.json()
}
//https://api.genderize.io/?name=raj
//response:{"count":202211,"name":"raj","gender":"male","probability":0.97}
const getPredictedGender = async(name:string)=>{
  const resp = await fetch(`https://api.genderize.io/?name=${name}`);
  return resp.json()
}
//https://api.nationalize.io/?name=raj
//response:{"count":285297,"name":"raj",
//"country":[{"country_id":"IN","probability":0.144739348445573},{"country_id":"QA","probability":0.06928255820096416},{"country_id":"SG","probability":0.06880310316947673},{"country_id":"OM","probability":0.0605732234485304},{"country_id":"BH","probability":0.057888934569631074}]}
const getPredictedNationality = async(name:string)=>{
  const resp = await fetch(`https://api.nationalize.io/?name=${name}`);
  return resp.json()
}


export default async function Name({params}:Params) {
  const ageData = getPredictedAge(params.name)
  const genderData = getPredictedGender(params.name)
  const countryData = getPredictedNationality(params.name)

  const [age, gender, country] = await Promise.all([ageData, genderData, countryData])

  return (
    <div>
    <div>
      <div> Personal Info</div>
      <div> Age: {age?.age}</div>
      <div> Gender: {gender?.gender}</div>
      <div> Country: {country?.country[0]?.country_id}</div>
    
    </div>
    </div>
  );
}
