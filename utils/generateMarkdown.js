// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return ""
  }
  if (license === "MIT") {
    return `![License](https://img.shields.io/badge/License-${license}-orange)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.Title}
  ${renderLicenseBadge(response.License)}

  ## Table of Contents
  * [Description](#description)
  * [InstallationInstructions](#installationinstructions)
  * [UsageInformation](#usageinformation)
  * [ContributionGuidelines](#contributionguidelines)
  * [License](#license)
  * [TestInstructions](#testinstructions)
  * [Questions](#questions)
  ## Description
  ${response.Description}
  ## InstallationInstructions
  ${response.InstallationInstructions}
  ## UsageInformation
  ${response.UsageInformation}
  ## ContributionGuidelines
  ${response.ContributionGuidelines}
  ## License'
  ${response.License}
  ## TestInstructions'
  ${response.TestInstructions}
  ## Questions'
  ${response.Email}
  ${response.GithubUserName}
`;
}

module.exports = generateMarkdown;
