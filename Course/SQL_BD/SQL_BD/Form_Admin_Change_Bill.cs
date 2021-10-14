using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Change_Bill : Form
    {
        public Form_Admin_Change_Bill()
        {
            InitializeComponent();
        }

        private void billBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            billTableAdapter.Update(bD_Shop_4semDataSet);
            this.Validate();
            this.billBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.bD_Shop_4semDataSet);

        }

        private void Form_Admin_Change_Bill_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Bill_View". При необходимости она может быть перемещена или удалена.
            this.bill_ViewTableAdapter.Fill(this.bD_Shop_4semDataSet.Bill_View);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Bill". При необходимости она может быть перемещена или удалена.
            this.billTableAdapter.Fill(this.bD_Shop_4semDataSet.Bill);

        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FAC = new Form_Admin_Change();
            FAC.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }
    }
}
