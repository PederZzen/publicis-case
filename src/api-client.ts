enum CampaignType {
  /**
   * Product or brand will be displayed in advertisements on social media such as facebook or instagram
   */
  SOCIAL_MEDIA,
  /**
   * Product or brand will be displayed in advertisements inside search results such as on google or bing
   */
  SEARCH_ENGINE,
  /**
   * Advertisement will be run on television
   */
  TV,
}

interface Client {
  /**
   * Unique ID
   */
  id: number;
  /**
   * Name of company that has hired us to do advertisement
   */
  name: string;
  /**
   * Our internal person that is assigned with the responsibility of communicating with this client
   */
  defaultCampaignManager: User;
}

interface User {
  /**
   * Unique ID
   */
  id: number;
  /**
   * Name of person
   */
  name: string;
  /**
   * Job email address
   */
  email: string;
  /**
   * Password for login (not hashed)
   * (password hashing is not part of this case for the sake of simplicity, and is normally not handled by frontend code anyway)
   */
  password: string;
  media?: string;
}

interface Campaign {
  /**
   * Unique ID
   */
  id: number;
  /**
   * Name of campaign
   * Normally contains the product name advertised and something relevant to the period it should run in
   */
  name: string;
  /**
   * Where people will encounter the advertisement
   */
  type: CampaignType;
  /**
   * The client that hired us to advertise
   */
  client: Client;
  /**
   * Our internal person that will set up the advertisement and communicate with the client
   * (may deviate from defaultCampaignManager)
   */
  campaignManager: User;
  /**
   * Start date of when advertisement will start to be displayed
   */
  startDate: string;
  /**
   * End date of when advertisement will start to be displayed
   */
  endDate: string;
  /**
   * The amount of currency that will be available to spend.
   * Given in norwegian kroner (NOK)
   */
  budget: number;
}

class ApiClient {
  private readonly campaigns: Campaign[];
  private readonly clients: Client[];
  private readonly users: User[];
  private readonly simulatedRequestTime = 800;

  constructor() {
    this.users = [
      {
        id: 1,
        name: "Davina Gwendoline",
        email: "davina.gwendoline@publicisgroupe.com",
        password: "bfsbw53",
        media:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        id: 2,
        name: "Jaylah Suz",
        email: "jaylah.suz@publicisgroupe.com",
        password: "th3tg3ht3",
        media:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      },
      {
        id: 3,
        name: "Margie Jeremiah",
        email: "margie.jeremiah@publicisgroupe.com",
        password: "8jnjnvqaa5",
        media:
          "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      },
      {
        id: 4,
        name: "Lenard Nita",
        email: "lenard.nita@publicisgroupe.com",
        password: "6t4n64h75j43",
        media:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      },
      {
        id: 5,
        name: "Leann Adamina",
        email: "leann.adamina@publicisgroupe.com",
        password: "asa533g3",
        media:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      },
      {
        id: 6,
        name: "Abilene Bevis",
        email: "abilene.bevis@publicisgroupe.com",
        password: "l66kj5ggcxz",
        media:
          "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      },
      {
        id: 7,
        name: "Evonne Isadora",
        email: "evonne.isadora@publicisgroupe.com",
        password: "vdava3fe2",
        media:
          " https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      },
      {
        id: 8,
        name: "Madeleine Anson",
        email: "madeleine.anson@publicisgroupe.com",
        password: "hnjnmszzsr43ww",
        media:
          "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      },
      {
        id: 9,
        name: "Jennifer Christy",
        email: "jennifer.christy@publicisgroupe.com",
        password: "53b4ehrwb35",
        media:
          "https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      },
    ];

    const apple: Client = {
      id: 1,
      name: "Apple",
      defaultCampaignManager: this.users[0],
    };
    const amazon: Client = {
      id: 2,
      name: "Amazon",
      defaultCampaignManager: this.users[2],
    };
    const microsoft: Client = {
      id: 3,
      name: "Microsoft",
      defaultCampaignManager: this.users[5],
    };
    const google: Client = {
      id: 4,
      name: "Google",
      defaultCampaignManager: this.users[1],
    };
    const samsung: Client = {
      id: 5,
      name: "Samsung",
      defaultCampaignManager: this.users[4],
    };
    const cocaCola: Client = {
      id: 6,
      name: "Coca-Cola",
      defaultCampaignManager: this.users[6],
    };
    const toyota: Client = {
      id: 7,
      name: "Toyota",
      defaultCampaignManager: this.users[7],
    };
    const mercedesBenz: Client = {
      id: 8,
      name: "Mercedes-Benz",
      defaultCampaignManager: this.users[6],
    };
    const mcDonalds: Client = {
      id: 9,
      name: "McDonald’s",
      defaultCampaignManager: this.users[2],
    };
    const disney: Client = {
      id: 10,
      name: "Disney",
      defaultCampaignManager: this.users[3],
    };
    const bmw: Client = {
      id: 11,
      name: "BMW",
      defaultCampaignManager: this.users[4],
    };
    const intel: Client = {
      id: 12,
      name: "Intel",
      defaultCampaignManager: this.users[3],
    };
    const facebook: Client = {
      id: 13,
      name: "Facebook",
      defaultCampaignManager: this.users[8],
    };
    const nike: Client = {
      id: 14,
      name: "NIKE",
      defaultCampaignManager: this.users[4],
    };
    const americanExpress: Client = {
      id: 15,
      name: "American Express",
      defaultCampaignManager: this.users[1],
    };

    this.clients = [
      apple,
      amazon,
      microsoft,
      google,
      samsung,
      cocaCola,
      toyota,
      mercedesBenz,
      mcDonalds,
      disney,
      bmw,
      intel,
      facebook,
      nike,
      americanExpress,
    ];

    this.campaigns = [
      {
        id: 1,
        name: "Magic Keyboard winter 2022",
        campaignManager: this.users[0],
        client: apple,
        type: CampaignType.SEARCH_ENGINE,
        startDate: "2022-01-05",
        endDate: "2022-02-11",
        budget: 100000,
      },
      {
        id: 2,
        name: "iPad Pro june 2022",
        campaignManager: this.users[0],
        client: apple,
        type: CampaignType.SOCIAL_MEDIA,
        startDate: "2022-06-12",
        endDate: "2022-06-18",
        budget: 850000,
      },
      {
        id: 3,
        name: "Big Mac Week 32 - 33",
        campaignManager: this.users[2],
        client: mcDonalds,
        type: CampaignType.TV,
        startDate: "2022-08-03",
        endDate: "2022-08-17",
        budget: 1170000,
      },
      {
        id: 4,
        name: "Disney Plus - ALWAYS ON",
        campaignManager: this.users[3],
        client: disney,
        type: CampaignType.SOCIAL_MEDIA,
        startDate: "2022-01-01",
        endDate: "2023-01-01",
        budget: 90000,
      },
      {
        id: 5,
        name: "Nike Air Max Plus 2023",
        campaignManager: this.users[4],
        client: nike,
        type: CampaignType.SOCIAL_MEDIA,
        startDate: "2023-02-04",
        endDate: "2023-04-02",
        budget: 510000,
      },
      {
        id: 6,
        name: "Microsoft Windows 12 Launch 2024",
        campaignManager: this.users[5],
        client: microsoft,
        type: CampaignType.SOCIAL_MEDIA,
        startDate: "2024-06-12",
        endDate: "2024-08-20",
        budget: 110000,
      },
      {
        id: 7,
        name: "Coca-Cola Citra",
        campaignManager: this.users[6],
        client: cocaCola,
        type: CampaignType.TV,
        startDate: "2024-04-10",
        endDate: "2024-08-12",
        budget: 400000,
      },
      {
        id: 8,
        name: "Corolla",
        campaignManager: this.users[7],
        client: toyota,
        type: CampaignType.SEARCH_ENGINE,
        startDate: "2022-01-10",
        endDate: "2022-10-12",
        budget: 850000,
      },
      {
        id: 9,
        name: "Bing",
        campaignManager: this.users[8],
        client: microsoft,
        type: CampaignType.SOCIAL_MEDIA,
        startDate: "2022-07-10",
        endDate: "2022-07-15",
        budget: 150000,
      },
    ];
  }

  public async requestCampaigns(): Promise<Campaign[]> {
    await this.delay(this.simulatedRequestTime);
    return this.campaigns;
  }

  public async requestUsers(): Promise<User[]> {
    await this.delay(this.simulatedRequestTime);
    return this.users;
  }

  public async requestClients(): Promise<Client[]> {
    await this.delay(this.simulatedRequestTime);
    return this.clients;
  }

  /**
   * Returns user if match or else null
   */
  public async login(email: string, password: string): Promise<User | null> {
    try {
      await this.delay(this.simulatedRequestTime);

      const user = this.users.find((u) => u.email === email);

      if (user && user.password === password) {
        return user;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Login error", error);
      return null;
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
  }
}

export { CampaignType, ApiClient };
export type { Client, User, Campaign };
