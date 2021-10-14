using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Statistics_Premium : Form
    {
        public Form_Admin_Statistics_Premium()
        {
            InitializeComponent();
        }

        private void Form_Admin_Statistics_Premium_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "BD_Shop_4semDataSet.Admin_Product_PremiumDevices". При необходимости она может быть перемещена или удалена.
            this.Admin_Product_PremiumDevicesTableAdapter.Fill(this.BD_Shop_4semDataSet.Admin_Product_PremiumDevices);

            this.reportViewer1.RefreshReport();
        }
    }
}
