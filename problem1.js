// PROBLEM 1
// Time Complexity  O(NLogN)
// Space Complexity O(N)
// DONE
function scheduleCourse(courses) {
  // STEP 1 : Sort it based on it's last day, this is to maximize the number of courses we can take
  let sortedCourses = courses.sort((a, b) => a[1] - b[1]);

  let totalTime = 0;
  let durations = []; // To track the durations of the selected courses

  //   STEP 2 : Loop the sorted courses
  for (let i = 0; i < sortedCourses.length; i++) {
    const duration = sortedCourses[i][0];
    const deadline = sortedCourses[i][1];

    // Add in the duration of each courses into totalTime, check if it is more than the deadline
    totalTime += duration;
    durations.push(duration); // Add to list of taken courses
    // i can keep track on the duration of courses that i've take

    // Step 3 : If total time exceeds deadline, drop the longest duration course
    if (totalTime > deadline) {
      // Sort in descending and Remove the longest
      durations.sort((a, b) => b - a);
      let longestCourse = durations.shift(); // get the removed one (which is the longest)
      totalTime -= longestCourse; // Subtract the longest course's time from total time
    }
  }
  return durations.length;
}
// __________________________________________________________________
// Time Complexity  O(N^2)
// Space Complexity O(N)
// DONE
function scheduleCourse(courses) {
  // Sort courses by their deadline
  courses.sort((a, b) => a[1] - b[1]);

  let totalTime = 0; // Initialize total time spent on courses

  for (let i = 0; i < courses.length; i++) {
    let duration = courses[i][0]; // Course duration
    let deadline = courses[i][1]; // Course deadline
    totalTime += duration; // Add the duration to the total time

    // If total time exceeds the deadline, we need to remove the longest course
    if (totalTime > deadline) {
      let maxDurationIndex = i; // Index of the course to be removed
      for (let j = 0; j < maxDurationIndex; j++) {
        let courseDuration = courses[j][0]; // Duration of the current course
        // Find the longest course that we've taken so far
        if (courseDuration > courses[maxDurationIndex][0]) {
          maxDurationIndex = j; // Update the index of the longest course
        }
      }

      // Remove the longest course from total time
      totalTime -= courses[maxDurationIndex][0];
      courses[maxDurationIndex][0] = 0; // Mark the course as removed
    }
  }

  // Filter and return the number of courses that are still scheduled
  return courses.filter((course) => course[0] > 0).length;
}
// __________________________________________________________________
