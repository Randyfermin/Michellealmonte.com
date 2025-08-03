Code Documentation and Standards Guide
File Header Standards
For every source code file in the project, include the following standardized header:
/**
 * @file: [FILENAME]
 * @path: [DIRECTORY_PATH/FILENAME]
 * @created: [YYYY-MM-DD]
 * @modified: [YYYY-MM-DD]
 * @description: Brief description of the file's purpose and functionality
 * @author: [AUTHOR_NAME] - Randolfo Fermin
 * @module: [MODULE_NAME] - Which part of the system this file belongs to
 */
Function/Method Documentation Standards
Document each function or method using this format:
/**
 * @function functionName
 * @description Concise explanation of what the function does
 * 
 * @param {DataType} paramName - Description of parameter
 * @param {DataType} paramName - Description of parameter
 * 
 * @returns {ReturnType} Description of what's returned
 * 
 * @example
 * // Example usage of the function
 * const result = functionName(param1, param2);
 * 
 * @throws {ErrorType} Description of potential errors
 */
Code Structure Standards

Consistent Indentation: Use 2 spaces for indentation across all files.
Component Organization: For React components, follow this structure:

Imports
Type definitions/interfaces
Component function
Helper functions
Exports


API Endpoint Documentation: For each API endpoint, include:
/**
 * @endpoint [METHOD] /api/path
 * @description Purpose of this endpoint
 * 
 * @requestBody {Object} Description of request body
 * @requestParam {DataType} paramName - Description
 * 
 * @responseBody {Object} Description of response
 * @responseCode {200} Success scenario description
 * @responseCode {4xx/5xx} Error scenario description
 */

Database Query Comments: For complex queries:
/**
 * @query [QUERY_NAME]
 * @description What this query accomplishes
 * 
 * @param {DataType} paramName - Description
 * @returns {ResultType} Description of returned data
 * 
 * @optimization Notes about query optimization if applicable
 */


Version Control Standards

Commit Messages: Structure commit messages as:
[TYPE]: Short description (50 chars or less)

More detailed explanation if necessary. Keep line length under 72 
characters. Explain what and why, not how.

Related issue: #123
Types include:

FEAT: New feature
FIX: Bug fix
DOCS: Documentation changes
STYLE: Formatting, missing semi-colons, etc.
REFACTOR: Code restructuring
TEST: Adding tests
CHORE: Maintenance tasks


Branch Naming: Follow pattern type/short-description

feature/project-dashboard
bugfix/auth-redirect
hotfix/security-vulnerability


Testing Documentation
For test files:
/**
 * @test: [COMPONENT_OR_FUNCTION_BEING_TESTED]
 * @description: What aspects are being tested
 * 
 * Test organization:
 * - Describe block 1: What is being tested here
 * - Describe block 2: What is being tested here
 */
Additional Documentation Requirements

TODO Comments: Use consistent format:
// TODO(username): Description of what needs to be done
// FIXME(username): Description of what needs to be fixed

Deprecation Notices: Mark deprecated code:
/**
 * @deprecated Since version X.Y.Z. Use newFunction() instead.
 */

Security Annotations: For security-sensitive code:
// SECURITY: Explanation of security considerations


Railway.com Deployment Notes
For configuration files related to Railway deployment:
/**
 * @deployment: Railway.com
 * @environment: [ENVIRONMENT_NAME]
 * @description: Purpose of this configuration
 * 
 * @variables:
 * - VARIABLE_NAME: Description and purpose
 * 
 * @dependencies:
 * - Service dependencies and versions
 */
GitHub Integration Notes
For GitHub workflow files:
/**
 * @workflow: [WORKFLOW_NAME]
 * @trigger: What triggers this workflow
 * @description: What this workflow accomplishes
 * 
 * @jobs:
 * - JOB_NAME: Purpose of this job
 * 
 * @secrets:
 * - SECRET_NAME: Purpose (but not the value!)
 */
File Endings
Every source code file must end with:
// End of File: [FILENAME]


**Tech Stack**
Backend: Node.js + Express
Frontend: Next.js + antd
Database: MySQL + JWT  
Hosting and Deploy: Railway.app
IDE: VS Code + JavaScript running on Windows

Always create a resume for a follow-up, just in case you have a complicate task and need to move to a new chat. 

We will be testing this project at the end of the develop of the project, we only need internal documentation and not for other person since this is one person project and for my own company. 

If you need to add any file out of the structure that we have already in the knowledge, let me know and do not write any code out of the scope. 

To fix any error feel back  provide a single solution, step by step. Do not write any script to automate the fix, just provide the single solution.