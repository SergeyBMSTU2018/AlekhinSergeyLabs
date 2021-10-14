using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Change_Buy : Form
    {
        public Form_Admin_Change_Buy()
        {
            InitializeComponent();
        }

        private void buyBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            buyTableAdapter.Update(bD_Shop_4semDataSet);
            this.Validate();
            this.buyBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.bD_Shop_4semDataSet);

        }

        private void Form_Admin_Change_Buy_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Buy_View". При необходимости она может быть перемещена или удалена.
            this.buy_ViewTableAdapter.Fill(this.bD_Shop_4semDataSet.Buy_View);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Buy". При необходимости она может быть перемещена или удалена.
            this.buyTableAdapter.Fill(this.bD_Shop_4semDataSet.Buy);

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
