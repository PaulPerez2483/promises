const Sequelize = require("sequelize");
const conn = new Sequelize(
	process.env.DATABASE_URL || "postgres://localhost/acme_api_db"
);

const { UUID, UUIDV4, STRING } = Sequelize;

const User = conn.define("user", {
	id: {
		primaryKey: true,
		type: UUID,
		defaultValue: UUIDV4
	},
	name: {
		type: STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: true
		}
	}
});

const Department = conn.define("department", {
	id: {
		primaryKey: true,
		type: UUID,
		defaultValue: UUIDV4
	},
	name: {
		type: STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: true
		}
	}
});
Department.hasMany(User);
User.belongsTo(Department);

const syncAndSeed = async () => {
	await conn.sync({ force: true });

	const [colombia, spain] = await Promise.all([
		Department.create({ name: "Colombia" }),
		Department.create({ name: "Spain" })
	]);
	const [paul, mark] = await Promise.all([
		User.create({ name: "Paul", departmentId: colombia.id }),
		User.create({ name: "Mark", departmentId: spain.id })
	]);
};

module.exports = {
	syncAndSeed,
	models: {
		User,
		Department
	}
};
