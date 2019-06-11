import React, { useState } from "react";
import Layout from "components/ui/Layout";
import H from "components/ui/H";
import Button from "components/ui/Button";
import DeleteButton from "components/ui/DeleteButton";
import Input from "components/ui/Input";
import Sidebar from "components/ui/Sidebar";
import Checkbox from "components/ui/Checkbox";
import Star from "components/ui/Star";
import Switch from "components/ui/Switch";
import PreviewButton from "components/ui/PreviewButton";
import DropdownArrows from "components/ui/DropdownArrows";

import AddButton from "components/ui/AddButton";
import Calendar from "components/ui/Calendar";
import links from "../mockup/links";

const Kit = () => {
  const [isChecked, setChecker] = useState(false);
  const [isBookmarked, setBookmark] = useState(false);
  return (
    <Layout>
      <Layout width="250px" height="100vh">
        <Sidebar data={links} title="Kazkommerts Securities" />
      </Layout>
      
      <Layout vertical >
        <H size="1" bold color="#3D4671">
          Kitdasfaaaaa
        </H>
        <Button> Добавление </Button>
        <Button disabled> Disabled </Button>
        <Button system>Системные </Button>
        <Button link="/test">Ссылка</Button>
        <Input />
        <DropdownArrows/>
        <Checkbox
          checked={isChecked}
          onChange={() => setChecker(event.target.checked)}
        />
        <Switch />
        <Star
          checked={isBookmarked}
          onChange={() => setBookmark(event.target.checked)}
        />

        <DeleteButton text/>
        <DeleteButton />
        <PreviewButton/>
        <Calendar/>
        <AddButton/>
        
      </Layout>
    </Layout>
  );
};

export default Kit;
