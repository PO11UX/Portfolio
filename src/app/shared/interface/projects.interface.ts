export class projectDto implements IprojectDto {
    id!: number 
    name!: string 
    description!: string 
    image!: string 
    link!: string 
   
    constructor(data?: IprojectDto) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  
    init(_data?: any) {
      if (_data) {
        this.name = _data['name'];
        this.description = _data['description'];
        this.image = _data['image'];
        this.link = _data['link'];
        this.id = _data['id'];
      }
    }
  
    static fromJS(data: any): projectDto {
      data = typeof data === 'object' ? data : {};
      let result = new projectDto();
      result.init(data);
      return result;
    }
  
    toJSON(data?: any) {
      data = typeof data === 'object' ? data : {};
      data['name'] = this.name;
      data['description'] = this.description;
      data['image'] = this.image;
      data['link'] = this.link;
      data['id'] = this.id;
      return data;
    }
  }
  
  export interface IprojectDto {
    id: number 
    name: string 
    description: string 
    image: string 
    link: string 
  }
  