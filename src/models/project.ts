class Project {
  private name: string;
  private description: string;
  private tech: string[];
  public get getName(): string {
    return this.name;
  }
  public get getDescription(): string {
    return this.description;
  }

  public get getTech(): string[] {
    return this.tech;
  }
  public set updateName(v: string) {
    if (v.trim() === "") throw new Error("Name cannot be empty");
    this.name = v;
  }
  public set updateDescription(v: string) {
    if (v.trim() === "") throw new Error("Description cannot be empty");
    this.name = v;
  }
  public set updateTech(v: string[]) {
    this.tech = v;
  }

  constructor(name: string, description: string, tech: string[]) {
    this.name = name;
    this.description = description;
    this.tech = tech;
  }
}

export default Project;
