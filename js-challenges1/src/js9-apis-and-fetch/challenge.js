/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* To see the structure of the "api's" please have a look in mockPeopleApi.json and mockInterestApi.json */

/* Foundation Challenges */

/**
 * A function which takes a url and returns the JSONified response
 *
 * @param {string} url - The url of the API to fetch from
 * @returns {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean}[]} The data from the API
 */
export const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

/**
 * A function which calls the API from the provided URL and returns just the list of names from each object.
 *
 * @param {string} url - The url of the API to fetch from
 * @returns {string[]} The list of names from the API
 */
export const getNames = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data.map((names) => names.name);
};

/**
 * A function which calls the API from the provided URL but only returns the employed people from the API.
 *
 * @param {string} url - The url of the API to fetch from
 * @return {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean}[]} The employed people from the API
 */
export const getEmployedPeople = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data.filter((emp) => emp.isEmployed);
};

/* Intermediate Challenges */

/**
 * A function which takes a url and an ID. It will fetch from an API at the url and return a single person object with
 * a matching ID. If no person with that ID exists, instead return a string saying "Person not found".
 *
 * @param {string} url - The url of the API to fetch from
 * @param {string} id - The ID of the person object to return
 * @returns {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean} | string} A person object OR A string saying "Person not found"
 */
export const findPersonWithId = async (url, id) => {
  const response = await fetch(url);
  const data = await response.json();

  const employee = data.filter((emp) => emp.id === id);
  if (employee.length === 0) return "Person not found";
  return employee[0];
};

/**
 * A function which takes a url and an interest. It will fetch from an API at the url and return people who have a
 * matching interest.
 *
 * @param {string} url - The url of the API to fetch from
 * @param {string} interest - The interest to match
 * @returns {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean}[] | string} A group of person objects OR A string saying "No people with interest found"
 */
export const getPeopleWithMatchingInterests = async (url, interest) => {
  const response = await fetch(url);
  const data = await response.json();

  const employees = data.filter((emp) => emp.interests.includes(interest));
  if (employees.length === 0) return "No people with interest found";
  return employees;
};

/* Advanced Challenges */

/**
 * A function which calls an API from the provided url and adds a description key to each person object.
 * The description should have the following format:
 * "My name is Joanna, I am 78 years old and 140cm tall. I enjoy knitting, baking and MMA. I am not currently employed"
 * So the full object would look like:
 * {
 *   id: "003",
 *   name: "Joanna",
 *   age: 78,
 *   height: 140,
 *   interests: ["knitting", "baking", "MMA"],
 *   isEmployed: false,
 *   description: "My name is Joanna, I am 78 years old and 140cm tall. I enjoy knitting, baking, and MMA. I am not currently employed"
 * }
 *
 * OR
 *
 * {
 *   id: "005",
 *   name: "Travis"
 *   age: 22,
 *   height: 160,
 *   interests: ["swimming", "watching TV", "knitting"],
 *   isEmployed: true,
 *   description: "My name is Travis, I am 22 years old and 160cm tall. I enjoy swimming, watching TV and knitting. I am currently employed",
 * }
 *
 * This should NOT modify the original data
 *
 * @param {string} url - The url of the API to fetch from
 * @returns {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean, decscription: string}[]} A group of person objects with added description key
 */
export const setDescriptions = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data.map((obj) => {
    return {
      ...obj,
      // prettier-ignore
      description: `My name is ${obj.name}, I am ${obj.age} years old and ${obj.height}cm tall. I enjoy ${obj.interests[0]}, ${obj.interests[1]} and ${obj.interests[2]}. I ${obj.isEmployed ? "am" : "am not"} currently employed`,
    };
  });
};

/* Expert Challenges */

/**
 * A function that uses 2 API's to fill information about the interests of each person.
 * Each person object that's returned should have this structure:
 * {
 *   id: "003",
 *   name: "Joanna",
 *   age: 78,
 *   height: 140,
 *   interests: [
 *     {
 *       interest: "knitting",
 *       costPerAnnum: 400,
 *       sizeOfCommunity: 10000000,
 *       isDoneInGroups: false
 *     },
 *     {
 *       interest: "baking",
 *       costPerAnnum: 400,
 *       sizeOfCommunity: 20000000,
 *       isDoneInGroups: false
 *     },
 *     {
 *       interest: "MMA",
 *       costPerAnnum: 1000,
 *       sizeOfCommunity: 20000000,
 *       isDoneInGroups: true
 *     }
 *   ],
 *   isEmployed: false
 * };
 *
 * This should NOT modify the original data
 *
 * @param {string} peopleUrl - The url of the people api
 * @param {string} interestUrl - The url of the interest api
 * @returns {{
 *  id: string,
 *  name: string,
 *  age: number,
 *  height: number,
 *  interests: {interest: string, costPerAnnum: number, sizeOfCommunity: number, isDoneInGroups: boolean}[],
 *  isEmployed: boolean,
 * }[]}
 */
export const setInterestDetails = async (peopleUrl, interestsUrl) => {
  const peopleResponse = await fetch(peopleUrl);
  const interestResponse = await fetch(interestsUrl);

  const personData = await peopleResponse.json();
  const interestsData = await interestResponse.json();

  return personData.map((obj) => {
    let objectInterests = obj.interests.map((interest) =>
      interestsData.find((item) => item.interest === interest)
    );
    return {
      id: obj.id,
      name: obj.name,
      age: obj.age,
      height: obj.height,
      interests: objectInterests,
      isEmployed: obj.isEmployed,
    };
  });
};
