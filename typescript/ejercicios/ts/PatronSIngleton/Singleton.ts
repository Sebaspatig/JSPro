class Singleton {
	private static instance: Singleton;

	private constructor() {}

	static getInstance() {
		if (!Singleton.instance) {
			new Singleton();
		}

		return Singleton.instance;
	}
}

export default Singleton;
