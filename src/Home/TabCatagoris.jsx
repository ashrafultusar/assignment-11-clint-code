import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCatagoris = () => {
  return (
    <div >
      <Tabs>
              <div className="container mx-auto my-12">
                  <h1 className="text-4xl font-lato font-bold text-center pb-1">Browse Job by category</h1>
                  <p className="text-center font-lato font-bold mb-6">Four Category available for the time being.Browse them by clicking on the tabs bellow</p>
          <div className="flex justify-center items-center">
            <TabList>
              <Tab>On-Site Job</Tab>
              <Tab>Remote Job</Tab>
              <Tab>Hybrid</Tab>
              <Tab>Part Time</Tab>
            </TabList>
          </div>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabCatagoris;
