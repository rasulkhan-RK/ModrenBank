import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter}  w-[80%] `}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] size-20 p-2 rounded-3xl object-contain cursor-pointer hover:bg-white "
          />
        </div>
      ))}
    </div>
  </section>
);
export default Clients;
