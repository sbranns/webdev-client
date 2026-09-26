export default function YourForm() {
  return (
    <>
      <h5>Student Profile</h5>
      <br />
      <form id="wd-your-form">
        <label htmlFor="wd-your-first-name">First name:</label>
        <input
          type="text"
          placeholder="First Name"
          id="wd-your-first-name"
        />{" "}
        <br />
        <label htmlFor="wd-your-last-name">Last name:</label>
        <input
          type="text"
          placeholder="Last name"
          title="The last name"
          id="wd-your-last-name"
        />
        <br />
        <label htmlFor="wd-your-password">Password:</label>
        <input type="password" placeholder="Password" id="wd-your-password" />
        <br />
        <label>Biography:</label>
        <br />
        <textarea
          id="wd-your-textarea"
          cols={30}
          rows={10}
          placeholder="Enter bio here"
        />
        <br />
        <label>Class standing:</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-radio-freshhman" />
        <label htmlFor="wd-radio-freshhman">Freshman</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-radio-sophomore" />
        <label htmlFor="wd-radio-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-radio-junior" />
        <label htmlFor="wd-radio-junior">Junior</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-radio-senior" />
        <label htmlFor="wd-radio-senior">Senior</label>
        <br />
        <input type="radio" name="radio-standing" id="wd-radio-graduate" />
        <label htmlFor="wd-radio-senior">Graduate</label>
        <br />
        <label>Time status:</label>
        <br />
        <input type="radio" name="radio-time" id="wd-radio-parttime" />
        <label htmlFor="wd-radio-parttime">Part-time</label>
        <br />
        <input type="radio" name="radio-time" id="wd-radio-fulltime" />
        <label htmlFor="wd-radio-fulltime">Full-time</label>
        <br />
        <label>Languages you know:</label>
        <br />
        <input type="checkbox" name="check-interest" id="wd-chkbox-python" />
        <label htmlFor="wd-chkbox-python">Python</label>
        <br />
        <input type="checkbox" name="check-interest" id="wd-chkbox-java" />
        <label htmlFor="wd-chkbox-java">Java</label>
        <br />
        <input
          type="checkbox"
          name="check-interest"
          id="wd-chkbox-javascript"
        />
        <label htmlFor="wd-chkbox-javascript">JavaScript</label>
        <br />
        <input type="checkbox" name="check-interest" id="wd-chkbox-c" />
        <label htmlFor="wd-chkbox-c">C</label>
        <br />
        <label htmlFor="wd-your-major">Major: </label>
        <br />
        <select id="wd-your-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="CE">Computer Engineering</option>
          <option value="CY">Cyber Security</option>
          <option value="DS">Data Science</option>
        </select>
        <br />
        <label htmlFor="wd-your-interest">Interests (select multiple): </label>
        <br />
        <select
          multiple
          id="wd-your-interest"
          defaultValue={["AI", "Software"]}
        >
          <option value="AI">AI</option>
          <option value="GAME">Game Development</option>
          <option value="SOFTWARE">Software</option>
          <option value="CLOUD">Cloud Engineering</option>
        </select>
        <br />
        <label htmlFor="wd-your-email">School Email: </label>
        <input
          type="email"
          placeholder="jdoe@somewhere.com"
          id="wd-your-email"
        />
        <br />
        <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
        <input
          type="number"
          defaultValue="2030"
          placeholder="2030"
          min={2026}
          max={2050}
          id="wd-your-grad-year"
        />
        <br />
        <label htmlFor="wd-your-dob">Date of birth: </label>
        <input
          type="date"
          defaultValue="2000-01-21"
          min="1900-01-01"
          max="2026-1-1"
          id="wd-your-dob"
        />
        <br />
        <label htmlFor="wd-your-excitement">
          How excited you are for the course:{" "}
        </label>
        <input
          type="range"
          defaultValue="5"
          min="0"
          max="10"
          id="wd-your-excitement"
        />
        <br />
        <button id="wd-your-button-save" type="submit">
          Save
        </button>
        <button id="wd-your-button-cancel" type="button">
          Cancel
        </button>
      </form>
    </>
  );
}
