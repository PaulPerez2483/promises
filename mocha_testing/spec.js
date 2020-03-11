const chai = require("chai");
const { expect } = chai;
const db = require("./db");
const { User, Department } = db.models;
const app = require("supertest")(require("./app"));

describe("Application User/Department Testing", () => {
	let seed;
	beforeEach(async () => (seed = await db.syncAndSeed));
});
